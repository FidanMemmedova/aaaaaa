import { WrapperSection } from "WrapperSection";
import "./App.scss";

const App = () => {
  return (
    <WrapperSection>
      <div className="container">
        <div className="recommendation_summary">
          <div className="recommendation_summary_text">
            <div className="recommendation_summary_headling">
              <h4>
                We cook – they enjoy every minute of their
                <img
                  className="arrow-right"
                  src={require("./image/arrow-right.png")}
                  alt="arrow"
                />
                lives
              </h4>
            </div>
            <div className="recommendation_reason">
              <p className="reason_summary">Because we...</p>
              <p className="reason_summary_text">
                <img
                  className="quote-right"
                  src={require("./image/quote-right.png")}
                  alt="quote-right"
                />
                We don't accept half-measures and shortcuts, because what we
                care about is the WOW effect. And all the luck that our efforts
                are not in vain. We know this because we closely follow the
                opinions of our consumers.
              </p>
            </div>
          </div>
          <div className="feedback">
            <div className="feedback-card">
              <img className="stars" src="./assets/images/stars.png" alt="stars" />
              <div className="feedback-card-text">
                <p className="feedback-author">Guy Hawkins</p>
                <p className="feedback-summary">
                  Minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                </p>
              </div>
            </div>
            <div className="feedback-card">
              <img className="stars" src="./assets/images/stars.png" alt="stars" />
              <div className="feedback-card-text">
                <p className="feedback-author">Esther Howard</p>
                <p className="feedback-summary">
                  Minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut
                </p>
              </div>
            </div>
            <div className="feedback-card">
              <img className="stars" src="./assets/images/stars.png" alt="stars" />
              <div className="feedback-card-text">
                <p className="feedback-author">Anonim</p>
                <p className="feedback-summary">
                  Minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur. Quis
                </p>
              </div>
            </div>
            <div className="feedback-card">
              <img className="stars" src="./assets/images/stars.png" alt="stars" />
              <div className="feedback-card-text">
                <p className="feedback-author">Jacob Jones</p>
                <p className="feedback-summary">
                  Minima veniam, quis nostrum exercitationem ullam laboriosam,
                  nisi ut aliquid ex ea
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperSection>
  );
};

export default App;
