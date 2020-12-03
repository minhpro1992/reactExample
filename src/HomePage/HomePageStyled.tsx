import styled from 'styled-components';

type SideBarProps = {
    isToggleSidebar: boolean
}

export const SideBarWrapperStyled = styled.div<SideBarProps>`
    flex: ${props => props?.isToggleSidebar ? 0.3 : 1};
    transition: flex 0.5s ease-out;
    padding: 10px;
    background: #f0f0f0;
    height: 100vh;
    position: relative;
    .saga-logout-btn: {
        max-width: ${props => props?.isToggleSidebar ? '48px' : 'auto'} !important;
        max-height: ${props => props?.isToggleSidebar ? '24px' : 'auto'} !important;
        font-size: ${props => props?.isToggleSidebar ? '0.75em' : '0.875em'} !important;
    };
    .saga-menu-wrapper {
        .saga-toggle-btn {
            display: flex;
            justify-content: flex-end;
            font-size: 24px;
            font-weight: 600;
            &:hover {
                cursor: pointer;
                color: #ccc;
            }
        };
    };
`;

export const MainContentWrapperStyled = styled.div<SideBarProps>`
    flex: ${props => props?.isToggleSidebar ? 4.7 : 4};
    transition: flex 0.5s ease-out;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .saga-main-content-wrapper {
    }
`