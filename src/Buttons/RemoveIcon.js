import styled from '@emotion/styled';
import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';


const IconRemove = styled(RemoveIcon)({
    backgroundColor: 'red',
    fontSize: "30px",
    color: 'white',
    padding: '5px',
    float: 'right',
    marginLeft: '30px',
}
)
export default function RemoveIconButton() {
  return (
    <div>
       
         <IconRemove />
      
    </div>
  )
}
