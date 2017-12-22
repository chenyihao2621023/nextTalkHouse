import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs, Icon  } from 'antd';

const TabPane = Tabs.TabPane;

class Content extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'content6',
  };

  state = {
    show: 0,
  };

  onChange = (key) => {
    console.log(key)
    this.setState({ show: parseInt(key) })
  }

  getBlockChildren = (item, i) => {
    const tag = item.tag;
    const img = item.img;
    const text = item.text;
    return (
      <TabPane
        key={i}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${i}`}
        >
          <i className={`iconfont ${tag.icon}`}></i>
          {tag.tag}
        </span>)}
      >
        <TweenOne.TweenOneGroup
          enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          leave={null}
          component=""
        >
          {this.state.show === i && (
            <div key="content">
              <div
                className={`${this.props.className}-img`}
                id={`${this.props.id}-imgBlock${i}`}
              >
                {img}
              </div>
              <div
                className={`${this.props.className}-text`}
                id={`${this.props.id}-textBlock${i}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>)}
        </TweenOne.TweenOneGroup>
      </TabPane>
    );
  };

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const childrenData = [
      {
        tag: { tag: '智能客服', icon: 'icon-zhinengkefu' },
        img: <img width="100%" src="../../static/image/1.png" />,
        text: `<h3>比人工快，实现永不离线的快捷服务</h3>
<div class='content'>媲美人工客服的机器人7x24全自动精准答复、输入引导、反向引导、流程引导、智能推荐，可解答80%以上的用户咨询，成倍提升工作效率。</div>`,
      },
      {
        tag: { tag: '人工客服', icon: 'icon-kefu' },
        img: <img width="100%" src="../../static/image/2.png" />,
        text: `<h3>全渠道客户反馈一站解决</h3>
        <div class='content'>
多渠道接入微信、微博、QQ、Web、App等多个入口用户，节省平台切换时间，极速处理各个渠道用户反馈，减少用户等待时间，提升客户服务体验，增强客服工作效率。
        </div>
`,
      },
      {
        tag: { tag: '工单系统', icon: 'icon-gongdanxinxi' },
        img: <img width="100%" src="../../static/image/3.png" />,
        text: `<h3>多模式、跨部门协同办公</h3>
        <div class='content'>
多种派单模式，用户留言转工单、客服创建、智能派单、指定派单、全员协同。让全公司都参与到客服的协同处理，简单、高效、有序；工单有序流转，形成闭环，业务处理零遗漏。
        </div>
`,
      },
      {
        tag: { tag: '多维统计', icon: 'icon-shuju' },
        img: <img width="100%" src="../../static/image/4.png" />,
        text: `<h3>务实的人讲数字</h3>
        <div class='content'>
多维度指标统计客服工作数据，帮助管理人员了解客户服务情况，有针对性调整客户服务策略，做出正确优化决策，也为考核客服业绩提供多元化、可参考性数据，让客服服务更加专业。
        </div>
`,
      },
      {
        tag: { tag: '个性定制', icon: 'icon-Clip' },
        img: <img width="100%" src="../../static/image/5.png" />,
        text: `<h3>定制化</h3>
<p>前端UI自定义： 咨询入口、聊天窗口、面板、皮肤、 位置、logo、常见问题、公告、活动、商品信息等，给用户一致的体验。</p>
<p>客户端UI自定义： 登录界面， 客服工作台的皮肤，logo</p>
`,
      },
    ];
    const tabsChildren = childrenData.map(this.getBlockChildren);
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
            reverseDelay={200}
            id={`${props.id}-title`}
          >
            NEXT TALK-平台
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            解决企业智能营销分析难题
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
          >
            <Tabs key="tabs" onChange={this.onChange} activeKey={`${this.state.show}`}>
              {tabsChildren}
            </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}

export default Content;
