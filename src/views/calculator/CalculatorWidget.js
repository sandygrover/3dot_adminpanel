import React from 'react'
export default class CalculatorWidget extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://cryptorival.com/widget/calcs/bitcoin?calcButtonColor=f93&amp;backButtonColor=f93&amp;dailyColor=4e9f15&amp;weeklyColor=09c&amp;monthlyColor=f0ad4e&amp;yearlyColor=d9534f&amp;backColor=f5f5f5&amp;addonColor=eee' height='495' width='500' allowtransparency='false' scrolling='no' frameborder='0' border='0' cellspacing='0' />"}} />;
  }
}