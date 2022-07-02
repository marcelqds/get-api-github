import styled from 'styled-components';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

const WrapperTabs = styled(Tabs)`
    font-size: 1.6rem;
    width: 100%;
    position: relative;
`;

const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;    
`;


const WrapperTab = styled(Tab)`
    padding: 8px;
    border-radius: 16px;
    border: 1px solid #cccccc22;
    user-select: none;
    cursor: pointer;

    &:focus{
        outline: none;        
    }

    &.is-selected{
        border: 1px solid #eee;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius:0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid white;
    }

`;

WrapperTab.tabsRole = 'Tab';

const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    display: none;
    width: 100%;
    min-height: 40vh;
    border: 1px solid #eee;
    margin-top: -4.8px;
    &.is-selected{
        display: block;
    }

`;


WrapperTabPanel.tabsRole = 'TabPanel';

export {
    WrapperTabs,
    WrapperTabList,
    WrapperTab,
    WrapperTabPanel
}
