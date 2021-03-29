import PropTypes from 'prop-types'

import style from './UserAvatar.module.scss'


export default function UserAvatar({ user, size, className }) {
  const avatarClass = size === 'big' ? style.avatarBig : style.avatarSmall
  return (
    <img
      src={user.avatarURL}
      alt={`Avatar of ${user.name}`}
      className={`${avatarClass} ${className || ''}`}
    />
  )
}

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
}
