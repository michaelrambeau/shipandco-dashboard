import React from 'react'
import tinytime from 'tinytime'

import Amount from 'components/utils/Amount'

const templates = {
  full: tinytime('{YYYY}/{Mo}/{DD} {H}:{mm}', {
    padMonth: true,
    padDays: true,
  }),
  compact: tinytime('{YYYY}/{Mo}/{DD}', {
    padMonth: true,
    padDays: true,
  }),
}

const InvoiceList = ({ invoices }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Date</td>
          <td>Amount</td>
          <td>Items</td>
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
      {templates.full.render(new Date(invoice.date))}
    </td>
    <td>
      <Amount value={invoice.amount} currency={'JPY'} />
    </td>
    <td>
      <ul>
        {invoice.items.map(item => <InvoiceItem key={item.id} item={item} />)}
        {invoice.itemsCount > 10 &&
          <li>
            {invoice.itemsCount - 10} more items...
          </li>}
      </ul>
    </td>
  </tr>

const InvoiceItem = ({ item }) =>
  <li>
    {item.description} = <Amount value={item.amount} currency="jpy" />
  </li>

export default InvoiceList
