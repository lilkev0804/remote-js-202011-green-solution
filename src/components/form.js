class Form extends React.Component {
  render() {
    return (
      <div>
        <form method="get" class="form-example">
          <div class="form-example">
            <label for="distance" className="titleBox">
              Distance :{" "}
            </label>
            <input
              className="input"
              value={this.state.distance}
              onChange={this.handleChangeKm}
              required
            />
            <p className="units">Km</p>
          </div>
          <div class="form-example">
            <label for="poids" className="titleBox">
              Poids de la marchandise :{" "}
            </label>
            <input
              className="input"
              value={this.state.weight}
              onChange={this.handleChangeKg}
              required
            />
            <p className="units">Kg</p>
          </div>
          <button type="submit">Valider</button>
        </form>
      </div>
    );
  }
}
