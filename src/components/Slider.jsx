import React from 'react';
import PropTypes from 'prop-types';
import './less/slider.less';
class Slider extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {

    };
  }
  render() {
    const arrData = [{
      bgImg: './static/image/server1.png',
      itemImg: './static/image/server1icon.png',
      itemTitle: '24小时优质服务',
      itemDesc: '国内一流的人工智能团队，自研专利级人工智能技术。基础NLP自然语言处理与深度神经网络学习技术开发全天候在线客服，为客户提供自助服务和客服机器人咨询服务，大幅提高订单的留存率，填补了人工客服离线空包'
    },{
      bgImg: './static/image/server2.png',
      itemImg: './static/image/server2icon.png',
      itemTitle: '多重防护给你安全',
      itemDesc: '小典客服基于多重防护云服务器打造，云服务器安全拥有多项国内外顶级安全认证全年365天实时保障数据不丢失、服务不中断、响应不停止，全面保障用户信息安全及云端数据安全'
    },{
      bgImg: './static/image/server3.png',
      itemImg: './static/image/server3icon.png',
      itemTitle: '全渠道部署统一管理',
      itemDesc: 'PC网页、移动网页、微信、APP、微博、钉钉、淘宝、邮件全渠道部署统一平台处理多终端信息，一体化快速回复完善客户数据分析体系，为企业决策提供辅助意见'
    }]
    return (
      <div className="slider">
        <div className="slide-body">
          {
            arrData.map( (item, i) => {
              return (
                <div className="slide-item" key={i}>
                  <img className="item-bg" src={item.bgImg} alt=""/>
                  <div className="mask">
                    <div className="bg"></div>
                    <div className="content">
                      <div className="item-img-panel">
                        <img className="item-img" src={item.itemImg} alt=""/>
                      </div>
                      <p className="line-panel">
                        <i className="item-line"></i>
                      </p>
                      <h3 className="item-title">{item.itemTitle}</h3>
                      <p className="item-desc">
                        {item.itemDesc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          


        </div>
      </div>
    );
  }

}
export default Slider;