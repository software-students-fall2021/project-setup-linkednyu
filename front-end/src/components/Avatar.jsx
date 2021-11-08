import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';


export default function ImageAvatars({ size, avatarSrc, id }) {
  const history = useHistory();
  return (
    <Stack direction="row">
      <Avatar style={{ height: size, cursor: 'pointer' }} alt="" src={avatarSrc} onClick={() => history.push(`/account/${id}`)} />
    </Stack>
  );
}



