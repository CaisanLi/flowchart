import BaseGraph, { GraphTypeEnum, graphDefaultValue } from './base';
import { Connection } from 'jsplumb';

interface ZConnection extends Connection {}

export { BaseGraph, GraphTypeEnum, graphDefaultValue, ZConnection };