import React from 'react'
import CreditCardIcon from 'components/utils/CreditCardIcon'
import tinytime from 'tinytime'

import TimeAgo from 'components/utils/TimeAgo'

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

const Item = ({ label, children }) =>
  <div className="field">
    <label className="label">
      {label}
    </label>
    <div className="control">
      {children}
    </div>
  </div>

const UserBillingInfo = ({ billing }) => {
  const { card } = billing
  return (
    <div className="box">
      <h3 className="title is-4">Billing Information</h3>
      <div>
        <Item label="Stripe customer ID">
          {billing.customer_id} (status: {billing.status})
        </Item>
        <Item label="Created at">
          {templates.full.render(new Date(billing.created_at))}
        </Item>
        <Item label="Updated at">
          {templates.full.render(new Date(billing.updated_at))}
        </Item>
        <Item label="Credit Card">
          <CreditCard card={card} />
        </Item>
        <Item label="Current Billing Cycle">
          {templates.compact.render(new Date(billing.current_period_start))}
          {' - '}
          {templates.compact.render(
            new Date(billing.current_period_end)
          )} (Ends <TimeAgo datetime={billing.current_period_end} />)
        </Item>
      </div>
    </div>
  )
}

const CreditCard = ({ card }) => {
  const { brand, last_four, expiration } = card
  return (
    <div>
      <span>
        <CreditCardIcon brand={brand} /> {brand}
      </span>
      <span>
        {` **** **** **** ${last_four}`}
      </span>
      <span>
        {` Valid until ${expiration}`}
      </span>
    </div>
  )
}

export default UserBillingInfo
