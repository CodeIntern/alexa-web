import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        // console.log("hello", this.props.items)

        return(
            <div>{
                this.props.items.map((item, index) => {
                    let imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png';
                    let itemName = '';

                    if (item.info === 'iphone') {
                      itemName = "Iphone";
                      imageUrl = 'https://ss7.vzw.com/is/image/VerizonWireless/iphone7-front-matblk?$device-lg$';
                    } else if (item.info === 'kindle') {
                      itemName = "Kindle";
                      imageUrl = 'http://www.stickpng.com/assets/images/58f36d56a4fa116215a923f6.png';
                    } else if (item.info === 'ipad') {
                      itemName = "Ipad";
                      imageUrl='https://ss7.vzw.com/is/image/VerizonWireless/apple_ipad_pro_10_5_spgry?$device-lg$';
                    }


                    return(
                      <div className="imageBox" key={index}>
                        <div className="imgContainer">
                          <img src={imageUrl} />
                        </div>
                        <div className="spanContainer">
                          <span>{itemName}</span>                        
                        </div>
                      </div>
                    );
                })
            }</div>
        )
    }
}

export default Gallery;
