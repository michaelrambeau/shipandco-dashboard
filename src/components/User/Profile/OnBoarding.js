import React from 'react'

const flagSettings = {
  hasAddedCarrier: value => (value ? 'Carrier added' : 'No carrier added'),
  hasAddedSettings: value =>
    value ? 'Settings created' : 'No settings created',
  hasAddedShop: value => (value ? 'Shop added' : 'No shop created'),
  hasAddedWarehouse: value =>
    value ? 'Warehouse added' : 'No warehouse added',
}

const OnBoarding = ({ onBoardingFlags }) => {
  const flags = Object.keys(onBoardingFlags)
    .map(key => ({
      key,
      text: flagSettings[key],
      value: onBoardingFlags[key],
    }))
    .filter(item => !!item.text)
  return (
    <div className="box">
      <h4 className="title is-4">
        Onboarding{' '}
        {onBoardingFlags.mode &&
          <div className="tag is-medium">Still in onbarding mode</div>}
      </h4>
      {flags.map(flag =>
        <Flag key={flag.key} text={flag.text(flag.value)} value={flag.value} />
      )}
    </div>
  )
}

const Flag = ({ text, value }) => {
  return value
    ? <div>
        <span
          className="fa fa-check-circle-o"
          style={{ marginRight: '0.5rem', color: '#23d160' }}
        />
        {text}
      </div>
    : <div>
        <span
          className="fa fa-circle-o"
          style={{ marginRight: '0.5rem', color: '#aaa' }}
        />
        {text}
      </div>
}

export default OnBoarding
