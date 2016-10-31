import {Duration, LocalTime, ZonedDateTime, ZoneOffset} from 'js-joda'

export const parse = ZonedDateTime.parse

export const serialize = (date) => date.toString()

export const now = () => (
  ZonedDateTime.now(ZoneOffset.UTC)
)

export const displayDate = (date) => {
  const y = date.year()
  const m = date.month().value()
  const d = date.dayOfMonth()
  return `${y}-${m < 10 ? '0' : ''}-${m}-${d < 10 ? '0' : ''}${d}`
}

export const displayTime = (time) => {
  const h = time.hour()
  const m = time.minute()
  return `${h}:${m < 10 ? '0' : ''}${m}`
}

export const displayTimeWithSeconds = (time) => {
  const h = time.hour()
  const m = time.minute()
  const s = time.second()
  return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
}

export const displayDuration = (fromDateTime, toDateTime) => {
  const duration = Duration.between(fromDateTime, toDateTime)
  return displayTimeWithSeconds(LocalTime.ofSecondOfDay(duration.seconds()))
}
