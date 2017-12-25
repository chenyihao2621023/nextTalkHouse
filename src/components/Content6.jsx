import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        
        <img src={item.icon} />
      </div>
      <h3>{item.title}</h3>
      <p className="line-panel">
        <i className="item-line"></i>
      </p>
      <p className="sub-content">{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSource = [
      { icon: './static/image/customericon.png', title: '客服方案', content: '人工智能机器人承担机械重复性问题，降低人工压力；让客服聚焦于更有价值的客户和场景；' },
      { icon: './static/image/managericon.png', title: '管理者方案', content: '人工智能机器人自动质检机制，多维度数据报表分析、人机辅助、知识库共享，让客户回答标准化，减少培训成本；' },
      { icon: './static/image/usericon.png', title: '用户方案', content: '系统的智能应答、智能切换、快捷输入、智能分配规则等功能让客服协同响应，减少客户等待，让企业的服务更有温度；' },
      { icon: './static/image/companyicon.png', title: '企业方案', content: '采集用户行为 & 属性信息，让客服更懂客户，针对性导购服务，智能推荐关联商品；提高转化率、客单价；' }
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
           <div>
             <h1>NEXT TALK-解决方案</h1>
             <div className="detail">解决企业智能营销分析难题</div>
           </div>
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
