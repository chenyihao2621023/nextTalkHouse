import React from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { Parallax } from 'rc-scroll-anim';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';

const Element = BannerAnim.Element;

const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, ' +
  'Hong Kong and Southeast Asia known as motorcycles [2], ' +
  'is a driven by the engine, ' +
  'operated by a hand or two directions three-wheeled vehicles, is a means of transport. ' +
  'In some military or police applications, will add a side compartment and a secondary wheel, ' +
  'become a special three-wheeled motorcycle, mobility Zheyi common plug-in auxiliary wheels.',
  title: 'Motorcycle',
};

let dataArray = [
  {
    pic: './static/image/waveperson.png',
    map: './static/image/wave.png',
    color: '#7AC7FF',
    background: '#20A1FF',
    title: '智能交互沟通营销',
    content: '智能交互沟通是基于新一代智能交互沟通分析模式，给您全新的客服沟通营销体验。NextTalk 机器人通过 AI System 平台与用户沟通，让企业拥有全新的智能化客服体验，提升效率，增加营业额。'
  },
  {
    pic: './static/image/business.png',
    map: './static/image/businessbg.png',
    color: '#7AC7FF',
    background: '#20A1FF',
    title: '商业智能',
    content: `<div class="content">
                <h3>基于关键词的分析更容易反映整体趋势</h3>
                <p>关键词权重随时间/地区的变化</p>
                <p>通过活动关键词随时间变化判断其影响力</p>
                <h3>基于知识点的热点分析可用于精细化提升销售和服务</h3>
                <p>问了什么问题的用户更容易转化成付费用户</p>
                <p>付费用户在购买后更多问哪些问题</p>
                <p>Top100问，指导 线上 / 线下 门店销售</p>
              </div>`
  },

];
// dataArray = dataArray.map(item => ({ ...item, ...textData }));
console.log(dataArray)
class DetailSwitchDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'details-switch-demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] },
      ],
    };
    this.oneEnter = false;
  }

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({ delay: 300 });
      this.oneEnter = true;
    }
  }

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.prev();
    this.bannerText.prev();
  };

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    showInt += 1;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.next();
    this.bannerText.next();
  };

  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };

  render() {
    const imgChildren = dataArray.map((item, i) => (
      <Element key={i} style={{ background: item.color }} leaveChildHide>
        <QueueAnim
          animConfig={this.state.imgAnim}
          duration={this.getDuration}
          delay={[!i ? this.state.delay : 300, 0]}
          ease={['easeOutCubic', 'easeInQuad']}
          key="img-wrapper"
        >
          <div className={`${this.props.className}-map map${i}`} key="map">
            <img src={item.map} width="100%" />
          </div>
          <div className={`${this.props.className}-pic pic${i}`} key="pic">
            <img src={item.pic} width="100%" />
          </div>
        </QueueAnim>
      </Element>
      ));
    const textChildren = dataArray.map((item, i) => {
      const { title, content, background } = item;
      console.log(title)
      return (<Element key={i}>
        <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
          <h1 key="h1">{title}</h1>
          <em key="em" style={{ background }} />
          <div key="div" className="content-wrapper" dangerouslySetInnerHTML={{ __html: content }}></div>
        </QueueAnim>
      </Element>);
    });
    return (
    <div
      className={`${this.props.className}-wrapper`}
      style={{ background: dataArray[this.state.showInt].background }}
    >
    
      <div className={this.props.className} key="detail">
      <OverPack
    className="my"
    replay
    playScale={[0.01, 0.99]}
    >
        <BannerAnim
          key="imgChildren"
          prefixCls={`${this.props.className}-img-wrapper`}
          sync
          type="across"
          duration={1000}
          ease="easeInOutExpo"
          arrow={false}
          thumb={false}
          ref={(c) => { this.bannerImg = c; }}
          onChange={this.onChange}
          dragPlay={false}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          key="textChildren"
          prefixCls={`${this.props.className}-text-wrapper`}
          sync
          type="across"
          duration={1000}
          arrow={false}
          thumb={false}
          ease="easeInOutExpo"
          ref={(c) => { this.bannerText = c; }}
          dragPlay={false}
        >
          {textChildren}
        </BannerAnim>
        </OverPack>
        <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
          {this.state.showInt && <Icon type="left" key="left" onClick={this.onLeft} />}
          {this.state.showInt < dataArray.length - 1 && <Icon type="right" key="right" onClick={this.onRight} />}
        </TweenOneGroup>
      </div>
      
    </div>);
  }
}
export default DetailSwitchDemo