async function initMocks(): Promise<void> {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    console.log('a');
    await worker.start();
    console.log('b');
  }
}

export { initMocks };
