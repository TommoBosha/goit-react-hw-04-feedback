import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return
    }
  };

 const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
   
  }
  
  
  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']} 
          onLeaveFeedback={onLeaveFeedback}/>
      </Section>
       <Section title="Statistics">
        
       {countTotalFeedback() ? (<Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={countTotalFeedback} 
          positivePercentage={countPositiveFeedbackPercentage()}
        />):
          (<Notification message="There is no feedback"/>)
       }
      </Section>


    </>)
  
}


// export class App extends Component {
//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   }
//   onLeaveFeedback = e => {
//     const name = e.target.name;
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1
//       }
//     })
//   }
//   countTotalFeedback = () => {
//     const {good, neutral, bad} = this.state
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const {good, neutral, bad} = this.state
//     if (good > 0 || neutral > 0 || bad > 0) {
//       return ((good / (good + neutral + bad)) * 100).toFixed(0);
//     } else {
//       return 0;
//     }
//   }
//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback
//     return <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions 
//           options={Object.keys(this.state)} 
//           onLeaveFeedback={this.onLeaveFeedback}/>
//       </Section>
//        <Section title="Statistics">
        
//        {total() ? (<Statistics 
//           good={good} 
//           neutral={neutral} 
//           bad={bad} 
//           total={total} 
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />):
//           (<Notification message="There is no feedback"/>)
//        }
//       </Section>


//     </>
//   }
// }