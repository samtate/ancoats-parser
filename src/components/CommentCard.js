import React from 'react';

const CommentCard = ({ comment, fieldSearch }) => {
  const mapEmoji = feeling => {
    switch (feeling.value) {
      case "Very negative":
        return "😫"
        break;
      case "Negative":
        return "🙁"
        break;
      case "Neither positive nor negative":
        return "😶"
        break;
      case "Positive":
        return "🙂"
        break;
      case "Very positive":
        return "😁"
        break;

      default:
        return "*"
        break;
    }
  }
  return (
    <>
      <h1>{fieldSearch("whichSectionOfTheRouteAreYouCommentingOn").value}</h1>
      <h2>{comment.feeling}/100</h2>
      <table>
        <tr>
          <td>🚶</td>
          <td>🚴‍♀️</td>
          <td>🚗</td>
          <td>🏪</td>
          <td>🏠</td>
          <td>🚌</td>
          <td>♿</td>
        </tr>
        <tr>
          <td>{mapEmoji(fieldSearch("whatEffectDoYouThinkTheSuggestedMeasuresWouldHaveForPedestrians"))}</td>
          <td>{mapEmoji(fieldSearch("whatEffectDoYouThinkTheSuggestedMeasuresWouldHaveForCyclists"))}</td>
          <td>{mapEmoji(fieldSearch("whatEffectDoYouThinkTheSuggestedMeasuresWouldHaveForMotorists"))}</td>
          <td>{mapEmoji(fieldSearch("whatEffectDoYouThinkTheSuggestedMeasuresWouldHaveForBusinesses"))}</td>
          <td>{mapEmoji(fieldSearch("whatEffectDoYouThinkTheSuggestedMeasuresWouldHaveForLocalResidents"))}</td>
          <td>{mapEmoji(fieldSearch("whatEffectDoYouThinkTheSuggestedMeasuresWouldHaveForPublicTransportProvidersBusesTaxis"))}</td>
          <td>{mapEmoji(fieldSearch("whatEffectDoYouThinkTheSuggestedMeasuresWouldHaveForPeopleWithDisabilities"))}</td>
        </tr>
      </table>
      <p>{fieldSearch("doYouHaveAnyOtherCommentsOnTheSuggestedMeasuresToImproveWalkingAndCyclingBetweenNewIslingtonEasternGatewayAndRedbankNorthernGateway").value}</p>
      <p>👍 {comment.agree.number}</p>
    </>
  )
};

export default CommentCard;
