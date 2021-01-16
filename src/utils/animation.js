const animationConfig = (animation) =>  {
  const config = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  }
  return config
}

export default animationConfig