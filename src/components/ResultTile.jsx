function ResultTile({ word, searchResult }) {
  return (
    <section className="results-section">
      <div className="main-container">
        <div className="heading">
          <h1 className="heading__title">
            Your word: <span className="keyword"> {word} </span>
          </h1>
        </div>
        <div className="cards">
          {searchResult.map((word, index) => (
            <div className="card card-1" key={index}>
              {word.meanings[0]?.definitions[0]?.definition && (
                <>
                  <h2 className="card__title">
                    {word.meanings[0]?.definitions[0]?.definition}
                  </h2>
                </>
              )}
              {word.phonetics.map((pn, index) => (
                <div className="word_phonetic" key={'word_'+index}>
                  <span className="phonetic_text"> {pn.text}</span>
                  <audio controls>
                    <source src={pn.audio} />
                    <source src={pn.audio} />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResultTile;
