function EmptyMoviesList() {
  return (
    <div
      style={{
        marginTop: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{ textAlign: 'center', fontSize: 50, margin: 0 }}>
        Sorry! <br />
        There are no movies
      </p>
    </div>
  );
}

export default EmptyMoviesList;
