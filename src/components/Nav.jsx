import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { Menu, Button } from 'antd';

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      subBarShow: false
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  handleClick(e) {

    if(e.key == '1' && !this.state.subBarShow) {
      this.setState({ subBarShow: true })
    }else {
      this.setState({
        subBarShow: false
      })
    }
    
  }
  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const navData = { menu1: '首页', menu2: '产品', menu3: '案例', menu4: '招商',menu5: '帮助', menu6: '联系我们'  };;
    const subData = [
      {
        img: '../../static/image/subzhineng.png',
        desc: '智能机器人'
      },{
        img: '../../static/image/subgongdan.png',
        desc: '工单中心'
      },{
        img: '../../static/image/subkefu.png',
        desc: '在线客服'
      },{
        img: '../../static/image/subdingzhi.png',
        desc: '个性定制'
      },{
        img: '../../static/image/subtongji.png',
        desc: '数据统计'
      }
    ]
    const subChildren = subData.map( (item, i) => {
      return (
        <div className="subBar-item">
          <img src={item.img} alt=""/>
          <div>{item.desc}</div>
        </div>
      )
    })
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={i}>{<a href="http://120.27.26.207/business.html">navData[key]</a>}</Item>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
     
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img src="../../static/image/logo.png" height="31px"/>
      </TweenOne>
      {isMode ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            defaultSelectedKeys={['0']}
            mode="inline"
            theme="dark"
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['0']}
          id={`${this.props.id}-menu`}
          onClick={this.handleClick.bind(this)}
        >
          {navChildren}
        </Menu>
        <div className="login">
          <Button ghost>登录</Button>
        </div>
        <div className="signUp">
          <Button>免费注册</Button>
        </div> 
      </TweenOne>)}
      <QueueAnim 
        className="demo-content"
        key="demo1"
        duration={200}
        animConfig={ {top:[64, 0],opacity:[1,0]} }
        >
        {
        this.state.subBarShow ?  <div key="demo1" className="subBar">
          {
            subChildren
          }
        </div> : null
      }
      </QueueAnim>
      

    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
