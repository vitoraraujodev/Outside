import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#dd3333', '#bb3333'],
})`
  flex: 1;
`;
