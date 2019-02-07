import React, {Component} from 'react';

class DropDown extends Component {

    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
      
        const { list } = this.props;

        let listToShow = list.map((item, i) => {
            return (<li key={i}><p style=
                {{
                Color:this.props.MyFontColor,
                fontSize:this.props.MyFontSize
            }}>{item}</p></li>)});
    
        return (
           <div className="dropdiv" style={{backgroundColor:this.props.BKColor}}>
                <ul>  
                    {listToShow}
                </ul>
            </div>
        );
    }
}

export default DropDown;