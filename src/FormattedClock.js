export default function FormattedClock(props) {
  let hours = props.date.getHours();
  if (hours < 0) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}
