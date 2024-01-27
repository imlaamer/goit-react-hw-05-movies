function ErrorMessage({ error }) {
  return (
    <p
      style={{
        marginTop: 100,
        fontSize: '30px',
        color: 'red',
        textAlign: 'center',
      }}
    >
      Oops! Something went wrong... <br /> {error}
    </p>
  );
}

export default ErrorMessage;
