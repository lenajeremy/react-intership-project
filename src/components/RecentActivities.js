/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from '../Logo';

export default function RecentActivities(props) {
  //activities should be gotten from an API in a real life situation
  const activities = [
    {
      image: 'url',
      title: 'HIV Blood Draw Test',
      label: 'A100'
    }, {
      image: 'url',
      title: 'TB Radiology XRay',
      label: 'A30'
    }, {
      image: 'url',
      title: 'Blood Pressure Check',
      label: 'A10'
    }
  ]
  return (
    <div className='recent_activities'>
      <p className='headings text-primary m-0'>Recent Activities</p>
      <table>
        <tbody>
          {activities.map(activity => <Activity image={activity.image} title={activity.title} label={activity.label} key={activity.title} />)
          }
        </tbody>
      </table>
    </div>
  )

}
function Activity(props) {
  return (
    <tr className='activity'>
      <td><Logo /></td>
      <td><p className='m-0'>{props.title}</p></td>
      <td><p className='m-0'>{props.label}</p></td>
    </tr>
  )

}