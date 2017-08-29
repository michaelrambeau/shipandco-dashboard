import React from 'react'

import Tabs from '../Tabs'
import UserBillingInfo from './UserBillingInfo'
import UserInvoiceList from './UserInvoiceList'

const UserBilling = ({ user, invoices }) => {
  if (!user) return <div>No user!</div>
  console.log('Invoices', invoices)

  const { billing } = user
  return (
    <div>
      <Tabs user={user} userId={user._id} activeTab="billing" />
      <div>
        <UserBillingInfo billing={billing} />
        <UserInvoiceList invoices={invoices} />
      </div>
    </div>
  )
}

export default UserBilling
