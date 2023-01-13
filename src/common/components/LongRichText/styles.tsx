import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { tokens } from '../../../../styles/design-system/token';

export const ContentWrapper = styled(Container)`
    p:first-of-type{
        text-align: center;
        text-decoration: underline;
    }

    p{
        color: ${lightTheme.neutral[200]};
        margin-bottom: 1rem;
        text-align: justify;
        span{
            text-decoration: none;
        } 
    }

    strong{
        font-weight: ${tokens.font.weight.bold};
    }

    ul{
        list-style-type: none;
    }
`;