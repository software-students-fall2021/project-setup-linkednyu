import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



export default function ImageAvatars({ size, avatarSrc, id }) {
  
  return (
    <Stack direction="row">
      <Avatar style={{ height: size, cursor: 'pointer' }} alt="" src={avatarSrc}/>
    </Stack>
  );
}



