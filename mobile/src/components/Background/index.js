import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#bb3333', '#ff4444'],
})`
  flex: 1;
`;
