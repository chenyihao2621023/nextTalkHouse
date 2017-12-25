import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    let details;
    
    data.detail &&  ( details = data.detail.split(/\n/).filter(item => item) );
   
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        let isNumber;
        if(details) {
          isNumber = !isNaN(parseInt(details[ii])) 
        }
        
        return (<li className={isImg ? 'icon content-item' : 'content-item'} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
          {details ? <p className={isNumber ? 'detail-number' : 'detail-link'}>{details[ii]}</p> : null}
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const logoContent = { img: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg', content: 'A efficient motion design solutions' };
    const dataSource = [
      { title: '产品', content: '智能机器人\n在线客服\n工单中心\n数据统计\n个性定制', contentLink: '#\n#\n#\n#' },
      { title: '案例', content: '经济服务\nO2O\n电商\n学习培训\n互动娱乐\nIT服务\n企业团体\n政府及公共事业\n其他', contentLink: '#\n#' },
      { title: '帮助', content: '帮助文档\n常见问题\n更新日志', contentLink: '#\n#\n#\n#' },
      { title: '关于我们', content: '公司介绍\n媒体报道\n联系我们\n加入我们\n服务协议', contentLink: '#\n#\n#\n#' },
      { title: '联系我们', content: '咨询热线：\n渠道加盟热线：\n商务合作：', contentLink: '#\n#\n#\n#',detail: '400-612-1123\n400-612-1123\nxiaodingrobot@xiaodingrobot.com' },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        {liChildrenToRender}
        <li key={5}>
          <img className="qr-code" src="./static/image/qrcode.png" alt=""/>
        </li>
        
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
