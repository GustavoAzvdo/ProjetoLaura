import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './Title.module.css'


interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({children}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box className={styles.title}>
            <Typography className={styles.titleText}>
                {children}
            </Typography>
        </Box>
    </Box>
  )
}

export default Title