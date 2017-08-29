import React from 'react'
import InvoiceList from './InvoiceList'

const UserInvoiceList = ({ invoices }) => {
  return (
    <div className="box">
      <h3 className="title is-4">Invoices</h3>
      <InvoiceList invoices={invoices} />
    </div>
  )
}

export default UserInvoiceList
