import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {Configuration, ConfigurationProvider, OrmProvider} from "./src/configuration";
import orm from "./src/orm";
import Firewall from "./src/utils/Firewall";

export default () => (
    <OrmProvider.Provider value={orm}>
        <IconRegistry icons={EvaIconsPack} />
        <ConfigurationProvider.Provider value={Configuration}>
            <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
                <Firewall>
                    <>Hello world</>
                </Firewall>
            </ApplicationProvider>
        </ConfigurationProvider.Provider>
    </OrmProvider.Provider>
)
