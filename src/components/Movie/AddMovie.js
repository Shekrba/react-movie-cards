import React, { Component } from 'react';

class AddMovie extends Component {
  state = {
    movie: {
      title: '',
      subtitle: '',
      description: '',
      imageUrl: '',
      rating: 0,
      numberOfRatings: 0,
      ratingSum: 0
    },
    validation: {
      title: {
        message:"Title can't be empty.",
        hidden: true
      },
      subtitle: {
        message:"Subtitle can't be empty.",
        hidden: true
      },
      description: {
        message:"Description can't be empty.",
        hidden: true
      },
      imageUrl: {
        message:"Image url can't be empty.",
        hidden: true
      }
    }
  };

  handleChange = event => {
    const name = event.target.name;
    const movie = {
      ...this.state.movie,
      [name]: event.target.value
    }

    this.setState({
      movie:movie,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    var validationFail = false;
    const validation = {...this.state.validation};

    for(let item in this.state.movie){

      if(this.state.validation[item] === undefined){
        continue;
      }

      const text = this.state.movie[item]+"";
      if(!(text.trim())){
        this.state.validation[item].hidden=false
        validationFail = true;
      }else{
        this.state.validation[item].hidden=true
      }
    }

    if(validationFail){
      this.setState({
        validation:validation
      })
    }else{
      this.props.onAdd(this.state.movie);
      this.resetState();
    }
  }

  resetState = () => {

    const validation = {...this.state.validation};
    for(let v in validation){
      validation[v].hidden = true;
    }

    this.setState({
        movie : {
          ...this.state.movie,
          title: '',
          subtitle: '',
          description: '',
          imageUrl: '',
        },
        validation : validation
      })
  }

  renderValidation = (item) => {
    if(item.hidden){
      return (
        <label className="small-text"></label>
      );
    }else{
      return (
      <label className="text-danger small-text">{item.message}</label>
      );
    }
  }

  render() {

    const validation = this.state.validation;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Add Movie</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="titleInput">Title</label>
                    <input
                      value={this.state.movie.title}
                      name="title"
                      type="text"
                      className="form-control"
                      id="titleInput"
                      placeholder="Enter title"
                      onChange={this.handleChange}
                    />
                    {this.renderValidation(validation.title)}
                  </div>
                  <div className="form-group">
                    <label htmlFor="subtitleInput">Subtitle</label>
                    <input
                      value={this.state.movie.subtitle}
                      name="subtitle"
                      type="text"
                      className="form-control"
                      id="subtitleInput"
                      placeholder="Enter subtitle"
                      onChange={this.handleChange}
                    />
                    {this.renderValidation(validation.subtitle)}
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="descriptionInput">Description</label>
                    <input
                      value={this.state.movie.description}
                      name="description"
                      type="text"
                      className="form-control"
                      id="descriptionInput"
                      placeholder="Enter description"
                      onChange={this.handleChange}
                    />
                    {this.renderValidation(validation.description)}
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageUrlInput">Image url</label>
                    <input
                      value={this.state.movie.imageUrl}
                      name="imageUrl"
                      type="text"
                      className="form-control"
                      id="imageUrlInput"
                      placeholder="Enter image url"
                      onChange={this.handleChange}
                    />
                    {this.renderValidation(validation.imageUrl)}
                  </div>
                </div>
              </div>

              <button name="submit" type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMovie;
