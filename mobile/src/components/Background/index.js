import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#bb3333', '#ee3333'],
})`
  flex: 1;
`;
