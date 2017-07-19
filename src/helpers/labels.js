import get from 'lodash.get'

export function getLabelPath(shipment) {
  const { _id, date, userId } = shipment
  const d = new Date(date)
  const month = d.getMonth()
  const year = d.getFullYear()
  const m = `${month + 1 < 10 ? '0' : ''}${month + 1}`
  return `labels/${year}${m}/${userId}/${_id}`
}

export function getLabelExtension(shipment) {
  const labelType =
    get(shipment, 'label.type') || get(shipment, 'shipment_infos.labelFormat')
  switch (labelType) {
    case 'pdf':
      return 'pdf'
    default:
      return 'txt'
  }
}

export function getLabelUrl(shipment) {
  const bucketName = get(shipment, 'label.bucket')
  const path = getLabelPath(shipment)
  const extension = getLabelExtension(shipment)
  return `https://storage.googleapis.com/${bucketName}/${path}.${extension}`
}
