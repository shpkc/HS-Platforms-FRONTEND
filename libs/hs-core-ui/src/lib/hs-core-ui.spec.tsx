import { render } from '@testing-library/react';

import HsCoreUi from './hs-core-ui';

describe('HsCoreUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HsCoreUi />);
    expect(baseElement).toBeTruthy();
  });
});
