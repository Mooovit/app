import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Configuration from 'core/configuration';
import {ConfigurationContext, OrmContext} from "core/contexts";
import orm from "core/orm";
import Firewall from "containers/Firewall";

export default () => (
    <OrmContext.Provider value={orm}>
        <IconRegistry icons={EvaIconsPack} />
        <ConfigurationContext.Provider value={Configuration}>
            <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
                <Firewall>
                    <>Hello world</>
                </Firewall>
            </ApplicationProvider>
        </ConfigurationContext.Provider>
    </OrmContext.Provider>
)
