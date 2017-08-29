import React from 'react'

const InvoiceList = ({ invoices }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Amount</td>
          <td>Date</td>
        </tr>
      </thead>
      <tbody>
        {invoices.map(invoice =>
          <InvoiceTableRow invoice={invoice} key={invoice.id} />
        )}
      </tbody>
    </table>
  )
}

const InvoiceTableRow = ({ invoice }) =>
  <tr>
    <td>
      {invoice.amount}
    </td>
    <td>
      {invoice.date.toString()}
    </td>
  </tr>

export default InvoiceList
