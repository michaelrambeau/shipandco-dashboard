const groups = require('./groups.json')

const findGroup = user => groups.find(group => group.members.includes(user._id))

const findUser = (id, users) => users.find(user => user._id === id)

const populatedGroups = users =>
  groups.map(group => {
    const members = group.members.map(id => findUser(id, users))
    return { ...group, members }
  })

const usersWithoutGroup = users =>
  users.filter(user => !findGroup(user)).map(user => ({
    key: user.email,
    members: [user],
  }))

const sum = group => group.members.reduce((acc, item) => acc + item.count, 0)

export default function getGroups(users) {
  const groups = []
    .concat(populatedGroups(users), usersWithoutGroup(users))
    .map(group => ({ ...group, total: sum(group) }))
    .sort((a, b) => (a.total > b.total ? -1 : 1))
  return groups
}
