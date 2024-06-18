import Ion from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const Icon = ({name, size = 24, color = '#000'}: Props) => {
  return <Ion name={name} size={size} color={color} />;
};
