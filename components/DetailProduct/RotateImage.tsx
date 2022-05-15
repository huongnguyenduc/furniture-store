import React, { Dispatch, SetStateAction } from 'react';
import { Box, Image as ImageMantine, Loader } from '@mantine/core';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params) => ({
  productImageRotate: {
    position: 'absolute',
    width: '148px',
    height: '26px',
    // bottom: '32px',
    bottom: '60px',
    [`@media (min-width: 480px)`]: {
      // height: '320px',
      bottom: '80px',
      // paddingTop: '71px',
    },
    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      // bottom: '72px',
      bottom: '60px',
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      // bottom: '72px',
      bottom: '180px',
      width: '382px',
      height: '38px',
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // bottom: '72px',
      bottom: '212px',
    },
    backgroundSize: 'contain',
    left: '50%',
    transform: 'translateX(-50%)',
    userSelect: 'none',
    pointerEvents: 'none',
    display: 'block',
    textAlign: 'center',
    '&:before': {
      position: 'absolute',
      content: '"360\u00b0"',
      width: 'auto',
      height: 'auto',
      margin: 0,
      color: theme.colors.lightGrey,
      padding: 0,
      // left: '50%',
      transform: 'translate(-50%, 100%)',
      // transform: 'translateX(-50%)',
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        display: 'none',
      },
    },
  },
  productImagePreview: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    height: '60px',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: '0 auto',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '335px',
      transform: 'translateX(-50%)',
      left: '50%',
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      height: '140px',
      width: '580px',
      left: '50%',
      marginLeft: '-290px',
      border: `1px solid ${theme.colors.lightBorder}`,
      borderRadius: '5px',
      padding: '20px 0',
    },
  },
  productImagePreviewItem: {
    width: 'calc(20% - 7px)',
    borderRadius: '4px',
    position: 'relative',
    cursor: 'pointer',
    border: '1px solid rgba(21, 21, 21, 0.03)',
    transition: 'border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    padding: 0,
    height: 'auto',
    lineHeight: 1,
    margin: 0,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '60px',
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      margin: '0 5px',
      width: '100px',
      height: '100px',
      lineHeight: '100px',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: theme.colors.mediumGrey,
      borderRadius: '3px',
      opacity: 0.03,
      transition: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  productImagePreviewItemImg: {
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      left: 0,
      right: 0,
      transform: 'translate(0, -50%)',
    },
  },
}));

var dragImg: HTMLImageElement;
function preventDragOver(event: any) {
  // prevent default to allow drop
  event.preventDefault();
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function rotateImagePreview(
  start: number,
  end: number,
  handle: Dispatch<SetStateAction<number>>
) {
  const smallIndex = Math.min(start, end);
  const bigIndex = Math.max(start, end);
  const distance = Math.abs(start - end);
  if (distance > 16) {
    if (smallIndex === end) {
      for (let i = bigIndex; i <= 32; i++) {
        await sleep(20);
        handle(i);
      }
      for (let i = 1; i <= smallIndex; i++) {
        await sleep(20);
        handle(i);
      }
    } else {
      for (let i = smallIndex; i >= 1; i--) {
        await sleep(20);
        handle(i);
      }
      for (let i = 32; i >= bigIndex; i--) {
        await sleep(20);
        handle(i);
      }
    }
  } else {
    if (bigIndex === end) {
      for (let i = smallIndex; i <= bigIndex; i++) {
        await sleep(20);
        handle(i);
      }
    } else {
      for (let i = bigIndex; i >= smallIndex; i--) {
        await sleep(20);
        handle(i);
      }
    }
  }
}

const RotateImage = ({ image }: { image: string | undefined }) => {
  const [imageIndex, setImageIndex] = React.useState(1);
  const [changeImagePosition, setChangeImagePosition] = React.useState(0);

  React.useEffect(() => {
    dragImg = new Image(0, 0);
    dragImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    document.addEventListener('dragover', preventDragOver, false);
    return () => {
      document.removeEventListener('dragover', preventDragOver, false);
    };
  }, []);

  const [isDragging, setIsDragging] = React.useState(false);

  const onImageDragStart = (e: any) => {
    e.dataTransfer.setDragImage(dragImg, 0, 0);
    setIsDragging(true);
  };
  const onImageDragEnd = () => {
    setIsDragging(false);
  };

  const onImageDragging = (e: any) => {
    e = e || window?.event;
    var dragX = e.pageX;
    if (dragX % 24 === 0) {
      if (dragX > changeImagePosition) {
        setImageIndex((imageOld) => (imageOld === 32 ? 1 : imageOld + 1));
        console.log('right', dragX);
      } else if (dragX < changeImagePosition) {
        setImageIndex((imageOld) => (imageOld === 1 ? 32 : imageOld - 1));
        console.log('left', dragX);
      }
      setChangeImagePosition(dragX);
    }
  };
  const { classes } = useStyles();
  return (
    <>
      {image ? (
        <ul
          style={{
            transition: 'opacity 0.2s linear 0s',
            cursor: `url('/images/hand_open.png'),auto`,
            listStyle: 'none',
          }}
          onDrag={onImageDragging}
          onDragStart={onImageDragStart}
          onDragEnd={onImageDragEnd}
          //   onDragOver={onImageDragOver}
        >
          {'.'
            .repeat(32)
            .split('')
            .map((_, index) => (
              <li
                style={{
                  opacity: index + 1 === imageIndex ? 1 : 0.001,
                  position: 'absolute',
                  left: 0,
                }}
                key={image}
              >
                <ImageMantine
                  alt="image"
                  src={image?.replace(new RegExp('frames/./', 'g'), `frames/${index + 1}/`)}
                  style={{
                    userSelect: 'none',
                  }}
                />
              </li>
            ))}
        </ul>
      ) : (
        <Loader
          color="grey"
          style={{
            position: 'absolute',
            backgroundSize: 'contain',
            left: '50%',
            transform: 'translate(-50%, 600%)',
            userSelect: 'none',
            pointerEvents: 'none',
            display: 'block',
            textAlign: 'center',
            zIndex: 110,
          }}
        />
      )}
      <ImageMantine
        className={classes.productImageRotate}
        src="https://media.interiordefine.com/skin/frontend/interiordefine/default/images/cylindo-arrows-desk.svg"
      />
      <Box className={classes.productImagePreview}>
        {[1, 7, 13, 19, 25].map((item) => (
          <Box
            className={classes.productImagePreviewItem}
            sx={(theme) => ({
              '&:after': { opacity: item === imageIndex ? 0 : 0.03 },
              borderColor:
                item === imageIndex ? theme.colors.brownBackground : 'rgba(21, 21, 21, 0.03)',
            })}
            onClick={() => {
              rotateImagePreview(imageIndex, item, setImageIndex);
            }}
          >
            <ImageMantine
              src={image?.replace(new RegExp('frames/./', 'g'), `frames/${item}/`)}
              className={classes.productImagePreviewItemImg}
              key={item}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default RotateImage;
