import { Box } from '@components';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Header = () => {
  return (
    <>
      <MotionBox className="header">
        <Box className="container">
          <Box className="header__wrapper">
            <Box className="header__logo">
              <Image src="/svg/logo.svg" alt="logo" width={51} height={47} />
            </Box>
            <Box className="header__menu">
              <ul>
                <li>
                  <a href="#works">Works</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </MotionBox>
    </>
  );
};

export default Header;
