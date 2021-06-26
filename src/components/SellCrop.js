import React, { Component } from "react";
import CropService from "../Services/CropService";

class SellCrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2a

      id: this.props.match.params.id,

      cropid: "",

      farmerId: "",

      cropName: "",

      farmerName: "",

      price: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);

    this.changeIdHandler = this.changeIdHandler.bind(this);

    this.changeCropNameHandler = this.changeCropNameHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);

    this.changeFarmerIdHandler = this.changeFarmerIdHandler.bind(this);

    this.saveOrUpdateCrop = this.saveOrUpdateCrop.bind(this);
  }

  // step 3

  componentDidMount() {
    // step 4

    if (this.state.id === "_add") {
      return;
    } else {
      let cropid = this.state.id;

      CropService.getCropById(cropid).then((res) => {
        let crop = res.data;

        console.log(JSON.stringify(crop));

        this.setState({
          cropId: crop.cropId,

          cropName: crop.cropName,

          farmerId: crop.farmerId,

          farmerName: crop.farmerName,
          price: crop.price,
        });
      });
    }
  }

  saveOrUpdateCrop = (e) => {
    e.preventDefault();
    let crop = {
      cropName: this.state.cropName,
      cropId: this.state.cropId,
      farmerId: this.state.farmerId,
      farmerName: this.state.farmerName,
      price: this.state.price,
    };

    // step 5

    if (this.state.id === "_add") {
      CropService.sellCrop(crop).then((res) => {
        this.props.history.push("/crops");
      });
    } else {
      CropService.updateCrop(crop, this.state.cropId).then((res) => {
        this.props.history.push("/crops");
      });
    }
  };

  changeNameHandler = (event) => {
    this.setState({ farmerName: event.target.value });
  };

  changeIdHandler = (event) => {
    this.setState({ cropId: event.target.value });
  };

  changeFarmerIdHandler = (event) => {
    this.setState({ farmerId: event.target.value });
  };

  changePriceHandler = (event) => {
    this.setState({ price: event.target.value });
  };

  changeCropNameHandler = (event) => {
    this.setState({ cropName: event.target.value });
  };

  cancel() {
    this.props.history.push("/crops");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Sell Crop</h3>;
    } else {
      return <h3 className="text-center">Update crop Details</h3>;
    }
  }

  render() {
    return (
      <div>
        <br></br>

        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}

              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Farmer Id: </label>

                    <input
                      placeholder="Farmer Id"
                      name="farmerId"
                      className="form-control"
                      value={this.state.farmerId}
                      onChange={this.changeFarmerIdHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Crop Id: </label>

                    <input
                      placeholder="Crop Id"
                      name="cropId"
                      className="form-control"
                      value={this.state.cropId}
                      onChange={this.changeIdHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Farmer Name: </label>

                    <input
                      placeholder="farmerName"
                      name="farmerName"
                      className="form-control"
                      value={this.state.farmerName}
                      onChange={this.changeNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Crop name: </label>

                    <input
                      placeholder="cropName"
                      name="cropName"
                      className="form-control"
                      value={this.state.cropName}
                      onChange={this.changeCropNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Price: </label>

                    <input
                      placeholder="Enter Price"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.changePriceHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateCrop}
                  >
                    Save
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellCrop;