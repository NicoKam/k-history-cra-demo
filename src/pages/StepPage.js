import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import 'antd/lib/modal/style/css'
import 'antd/lib/button/style/css'
import { useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import NaviButton from '../components/NaviButton';
import './StepPage.css';

const StepPage = (props) => {
  console.log(props);
  const { history } = props;

  const [modal, contextHolder] = Modal.useModal();

  const pathname = history.location.pathname;
  const index = Number(pathname.replace(/[^\d]*/g, '')) || 1;
  const nextPath = index < 9 ? '/step' + (index + 1) : '';

  useEffect(() => {
    if (index === 3) {
      return history.block('Do you want to leave?(sync blocker)');
    }
    if (index === 6) {
      return history.block(
        () =>
          new Promise((resolve, reject) => {
            modal.confirm({
              icon: <ExclamationCircleOutlined />,
              content:'Do you want to leave?(async blocker)',
              onOk() {
                resolve();
              },
              onCancel() {
                reject();
              },
            });
          }),
      );
    }
  }, []);

  return (
    <div className="step-page">
      {index === 8 && (
        <Prompt
          message={() =>
            new Promise((resolve, reject) => {
              modal.confirm({
                icon: <ExclamationCircleOutlined />,
                content: 'Do you want to leave?(async blocker by prompt)',
                onOk() {
                  resolve();
                },
                onCancel() {
                  reject();
                },
              });
            })
          }
        />
      )}
      <p>
        示例页面：从 step1 ~ step9
        <br />
        Demo page from '/step1' to '/step9'
      </p>
      <div className="page-detail">
        <div>Current pathname: {history.location.pathname}</div>
        <div>Action: {history.action}</div>
        <div>State: {JSON.stringify(history.location.state)}</div>
      </div>
      <p>
        随意操作按钮，对比 history 与 k-history 的表现
        <br />
        Check buttons below to compare 'history' and 'k-history'.
      </p>
      <NaviButton history={history} nextPath={nextPath}></NaviButton>
      <ul className="tips">
        <li>step3使用了同步拦截</li>
        <li>step6, step8使用了异步拦截，history不支持</li>
        <li>在前进/后退时，history.action显示有误</li>
        <li>history在刷新页面后，使用前进、后退时，如果页面存在block，取消跳转时，地址栏没有被取消。操作方式：</li>
        <ol>
          <li>进入到/step3</li>
          <li>push到/step4</li>
          <li>后退到/step3</li>
          <li>刷新页面</li>
          <li>点击前进按钮，触发block，弹出prompt</li>
          <li>点击取消按钮，终止跳转，观察地址栏，仍然是/step4</li>
        </ol>
      </ul>
      {contextHolder}
    </div>
  );
};

export default StepPage;
