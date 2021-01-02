import App from './App';
import StepPage from './pages/StepPage';

export default [
  {
    path: '/',
    children: App,
  },
  {
    path: '/step1',
    children: (props) => <StepPage {...props} />,
  },
  {
    path: '/step2',
    children: (props) => <StepPage {...props} />,
  },
  {
    path: '/step3',
    children: (props) => <StepPage {...props} />,
  },
  {
    path: '/step4',
    children: (props) => <StepPage {...props} />,
  },
  {
    path: '/step5',
    children: (props) => <StepPage {...props} />,
  },
  {
    path: '/step6',
    children: (props) => <StepPage {...props} />,
  },
  {
    path: '/step7',
    children: (props) => <StepPage {...props} />,
  },
  {
    path: '/step8',
    children: (props) => <StepPage {...props} />,
  },
  {
    path: '/step9',
    children: (props) => <StepPage {...props} />,
  },
];
