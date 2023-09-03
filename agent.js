import * as dotenv from 'dotenv';

dotenv.config();

import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';

const model = new OpenAI({
    temperature: 0,
});

const tools = [];