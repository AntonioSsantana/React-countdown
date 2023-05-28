import PropTypes from 'prop-types';

function CHeader({ name }) {
  return (
    <header>
      <article>
        <img />
        <span>{name}</span>
      </article>
      <nav>
        <img />
      </nav>
    </header>
  );
}

CHeader.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CHeader;