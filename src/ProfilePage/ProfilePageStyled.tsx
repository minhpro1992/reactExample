import styled from 'styled-components'

type ProfileProps = {
    isToggleUserInfo: boolean
}

export const ProfileWrapperStyled = styled.div<ProfileProps>`
    .profile-detail-toggle {
        margin-left: 1em;
        font-size: 1.5em;
        animation: ${props => props?.isToggleUserInfo && 'slide 0.5 infinite'};
        &:hover {
            transition: animation 2s;
            animation: slide 0.5s;
            cursor: pointer;
        },
    };
    @keyframes slide {
        from {
          opacity: 0;
          transform: scale(1) rotate(0deg);
        }
        to {
          opacity: 1;
          transform: scale(2) rotate(180deg);
        }
      }
      
    &:hover {
        .profile-detail-toggle {
            transition: animation 2s;
            animation: slide 0.5s;
            cursor: pointer;
        }
    }
`